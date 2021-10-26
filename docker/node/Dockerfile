FROM node:14-buster-slim

RUN apt-get update && \
  apt-get install -y git make g++ && \
  yarn global add @angular/cli typescript bootstrap@4 && \
  ng config -g cli.packageManager yarn && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/*

ENV TZ Asia/Tokyo

WORKDIR /app/angular1

# CMD ["ng","serve","--host", "0.0.0.0"]
# ng-bootstrapのインストール