
if [ -z "$1" ]; then
    cp ./config.default.json ./config.json
else
    jq 'reduce inputs as $in (.; .chains *= $in.chains)' ./config.default.json "$1/config.json" > ./config.json
fi