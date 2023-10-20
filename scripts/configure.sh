#!/bin/bash

if test -f ~/.pond/info.json; then
    jq 'reduce inputs as $in (.; .chains *= $in.chains)' ~/.pond/info.json ./config.default.json  > ./config.json
else
    cp ./config.default.json ./config.json
fi