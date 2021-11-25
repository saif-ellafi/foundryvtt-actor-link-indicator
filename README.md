# Actor Link Indicator for Foundry VTT

Stop forgetting to (un)link tokens froms actors! Adds an easy to observe, toggle indicator in sheet titles to quickly
switch and recognize the token link status. System agnostic (in theory).

![Example](img.png)

**Recommended Together with [Window Controls](https://github.com/saif-ellafi/foundryvtt-window-controls)**

[Invite me a coffee if you find this useful :D](https://ko-fi.com/V7V14D3AH)

## Why this module

I thought it was only me, but it turns out I am not alone in overlooking token linking in Foundry :-) Some systems 
use different defaults for different tokens or even sheets, so it becomes confusing.
With this module, it will be very clear whether a token is an independent prototype or if it is directly an Actor sheet, 
and allows to conveniently take care of that without having to go into token prototype settings or making changes and 
regret it later.

## Features

**Indicators:**
* **On Actors:** Indicates whether the Actor will generate linked tokens or prototype tokens
  * Clicking this indicator toggles its link mode. **Only affects new tokens**
* **On Tokens:** Indicates whether the token is attached to an Actor or if it is an independent unlinked "grunt"
  * **ONE-WAY** only: Linked Tokens may go into detached mode and become "grunts", or copies, basically unlinked from a linked state 
  * This was done in purpose, as the other way around (re-linking a detached token) could lead to loss of data, since
  the token's data would be replaced by the actual actor's values. Thus, no shortcut was added here.

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
