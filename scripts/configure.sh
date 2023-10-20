
if test -f ~/.pond/config.json; then
    jq 'reduce inputs as $in (.; .chains *= $in.chains)' ./config.default.json ~/.pond/config.json > ./config.json
else
    cp ./config.default.json ./config.json
fi