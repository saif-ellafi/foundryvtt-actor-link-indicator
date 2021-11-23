function convenientLinkToggle(html, actor) {
    console.log(html);
    const isNowLinked = actor.actor.data.token.actorLink;
    const target = $(html.currentTarget);
    if (isNowLinked) {
        target.html(target.html().replace('fa-link', 'fa-unlink'));
    } else {
        target.html(target.html().replace('fa-unlink', 'fa-link'));
    }
    actor.actor.update({'token.actorLink': !(isNowLinked)});
}

async function convenientUnlinkToken(html, actor) {
    console.log(html);
    const target = $(html.target);
    actor.token.update({'actorLink': false});
    target.html(target.html().replace('Linked', 'Unlinked'));
    const newToken = actor.token;
    await actor.close();
    console.log(newToken);
    newToken.actor.sheet.render(true);
}

Hooks.on('ready', function() {
    if (game.user.isGM) {
        Hooks.on('getActorSheetHeaderButtons', function (actor, buttons) {
            console.log(actor);
            if (!actor.token) {
                const isUnique = actor.actor.data.token.actorLink;
                const toggleLinkButton = {
                    label: "",
                    class: "convenient-link",
                    icon: isUnique ? "fas fa-link": "fas fa-unlink",
                    onclick: (html) => convenientLinkToggle(html, actor)
                };
                buttons.unshift(toggleLinkButton);
            } else if (actor.token.isLinked === true) {
                const toggleLinkButton = {
                    label: "",
                    class: "convenient-link-highlight",
                    icon: "fas fa-link",
                    onclick: (html) => convenientUnlinkToken(html, actor)
                };
                buttons.unshift(toggleLinkButton);
            } else if (actor.token.isLinked === false) {
                const toggleUnlinkedPlaceholder = {
                    label: "",
                    class: "convenient-link-warning",
                    icon: "fas fa-unlink",
                    onclick: () => {}
                };
                buttons.unshift(toggleUnlinkedPlaceholder);
            }
            return buttons;
        });
    }
});