# Pond UI

A UI starter pack for dApps built on [Kujira](https://github.com/Team-Kujira/core)

## Getting Started

Start the local pond network. Ensure you have [Docker](http://docker.com) installed and running.

1. Install [pond](https://github.com/Team-Kujira/pond) `curl -o pond https://raw.githubusercontent.com/Team-Kujira/pond/main/pond && chmod +x pond && sudo mv pond /usr/local/bin/`
2. `pond init`
3. `pond start`

Load the config into your pond-ui app

4. `git clone https://github.com/Team-Kujira/pond-ui.git`
5. `cd pond-ui`
6. `npm i`
7. `npm run dev`
8. Start building!

## Coming Soon...

- Wallet connections
- Transaction signing & broadcasting

## Dev Containers

To open the repository in a VS Code Devcontainer:
- Use VS Code on your local machine
- Install the [Dev Containers VS Code extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
- Click on the bottom left and choose to Reopen in Container
- Execute `npm run dev` and you are ready to build

This will install:
1. Pond
2. Typescript
3. npm