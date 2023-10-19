# Pond UI

A UI starter pack for dApps built on [Kujira](https://github.com/Team-Kujira/core)

## Getting Started

Out of the box, the boilerplate is compatible with Testnet and Mainnet:

```
git clone https://github.com/Team-Kujira/pond-ui.git
cd pond-ui
./scripts/configure.sh
npm i
npm run dev
```

### Using a local chain (Coming VERY soon)

Add configuration for a `pond-1` local network with [Pond](https://github.com/Team-Kujira/pond), a tool for local orcestration of a kujira network.

Start the local network. Ensure you have [Docker](http://docker.com) installed and running.

```
cd ..
mkdir pond
docker run -e USER=$UID -v ./pond:/tmp/pond docker.io/starsquid/pond-prepare:latest prepare.py --nodes 1
cd pond
./start
```

Load the config into your pond-ui app

```
cd ../pond-ui
./scripts/configure.sh ../pond
npm run dev
```

`pond-1` will now be available as a network in the selector

## Coming Soon...

- Wallet connections
- Transaction signing & broadcasting
