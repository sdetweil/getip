
config 

```js
{
  module:"getip",
  position:"bottom_right"
}
```

module usage

fetch(`/modules/getip")

(from same MagicMirror server this page/module came from)

returns a text string with the ip address 

"192.168.2.106" for example

note to connect from outside the MM system,the address and ipWhitelist in mm config MUST allow outside access
by default ONLY apps inside the same os booted system can connect (localhost...)
