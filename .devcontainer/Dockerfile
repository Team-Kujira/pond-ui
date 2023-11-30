FROM mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye

# Install additional packages.
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends curl jq \
    && apt-get -y install ca-certificates curl python3-pip python3-dev python3-setuptools python3-wheel \
    && pip install --upgrade pip && pip install requests \
    && sudo rm -rf /var/lib/apt/lists/*
    
RUN curl -o pond https://raw.githubusercontent.com/Team-Kujira/pond/main/pond && chmod +x pond && sudo mv pond /usr/local/bin/
