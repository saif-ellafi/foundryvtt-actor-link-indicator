# Actor Link Indicator for Foundry VTT

Adds an easy to observe, toggle and indicator in sheet titles to quickly switch and recognize the token link behavior.
As this was for me easy to overlook in vanilla Foundry :-)

* **On Actors:** Whether the Actor will produce linked tokens or not
* **On Tokens:** Whether the token is attached to an Actor or not 
* Actor sheets can toggle their link modes, safely (it will only affect future token states)
* On Tokens, it is **one-direction** only: Linked Tokens may go into detached mode immediately. 
The other way around could produce loss of data so it is not done on purpose. 

![Example](img.png)

I did this one mostly for myself, as I realized I was working on tokens or actors, and vice-versa, 
with unintended outcomes. Maybe it will also be useful for you.
Not tested with all systems or modules out there, please report if this does not work for you, 
or better, help me improve it :)

**Recommended Together with [Window Controls](https://github.com/saif-ellafi/foundryvtt-window-controls)**

[Invite me a coffee if you find this useful :D](https://ko-fi.com/V7V14D3AH)

## By JeansenVaars
![JVLogo](logo-small-black.png)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/V7V14D3AH)

## Check out my other modules!
* Minimal UI
* Scene Preview
* Super Select

# License
[MIT License](./LICENSE.md)

# Powered By
[![JetBrains](./jetbrains.svg)](https://www.jetbrains.com)

Thanks to JetBrains I can work on this project using **WebStorm**.
