#!/bin/sh

if [ -f "$HOME/.pond/info.json" ]; then
    jq 'reduce inputs as $in (.; .chains *= $in.chains)' "$HOME/.pond/info.json" "./config.default.json"  > "./config.json"
else
    cp "./config.default.json" "./config.json"
fi