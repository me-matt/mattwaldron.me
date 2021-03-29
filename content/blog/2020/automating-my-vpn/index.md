---
title: Automating my VPN
date: "2020-04-10T00:00:00.000Z"
description: "Automating my router VPN connections"
tags: Automation
---

Since we moved to New Zealand - more about that coming in a later post - we've been constantly juggling our VPN connections to get access to various media streams. In particular, getting some UK services that the kids really enjoyed.

The problem here, every time we wanted to stream another service meant getting out the laptop, connecting to the router, disabling the previous VPN, and connecting the new VPN. Now that doesn't sound like a big deal, but the context switching was enough to frustrate me into automating this.

It would be nice for the person wanting a different service to be able to change the VPN themselves, maybe even a physical button alternating the services? I had a look around and found these [Flic](https://flic.io/), which could be a good idea. But the price is ridiculous to me. They're easily reproduced using an Arduino.

With an end goal roughly defined it was time to tackle the immediate problem, taking the manual part out of the current process; write an SSH script to execute and update the router's active VPN client connections.

Pretty, pretty, pretty easy. So here's a script I wrote up real quick.

```
#!/bin/bash

o="IdentitiesOnly=yes"
i=/Users/<user>/.ssh/asus_rsa
l=<router_user>
s=<router_ip>
p=<router_port>

if [ "$1" = "UK" ]; then
    ssh -p $p -o $o -i $i -l $l $s /bin/sh <<EOF
service stop_vpnclient4
service start_vpnclient2
exit
EOF
fi

if [ "$1" = "US" ]; then
    ssh -p $p -o $o -i $i -l $l $s /bin/sh <<EOF
service stop_vpnclient2
service start_vpnclient4
exit
EOF
fi
```

I decided to use [Home assistant](https://www.home-assistant.io) on my Synology NAS, as it provides a platform for automating a few other things I can see coming up in the future.

This leaves scope for using Arduino buttons, but for the time being I can easily execute the functions from a dashboard on my phone.