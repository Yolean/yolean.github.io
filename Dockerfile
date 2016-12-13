FROM ruby:2.3@sha256:a6c32bd870fb5a9bd8cba0816750fb62db5283c1f748aa948f856d79c258ab96

RUN mkdir /usr/src/blog
WORKDIR /usr/src/blog
COPY Gemfile .

RUN bundle install

# Solve: Could not find a JavaScript runtime. See https://github.com/rails/execjs for a list of available runtimes.
# https://jekyllrb.com/docs/troubleshooting/#could-not-find-a-javascript-runtime-execjsruntimeunavailable
RUN apt-get update \
  && apt-get install -y apt-transport-https lsb-release \
  && curl -s https://deb.nodesource.com/gpgkey/nodesource.gpg.key | apt-key add - \
  && echo 'deb https://deb.nodesource.com/node_6.x jessie main' > /etc/apt/sources.list.d/nodesource.list \
  && apt-get update \
  && apt-get install -y nodejs \
  && apt-get remove -y apt-transport-https lsb-release \
  && rm -r /var/lib/apt/lists/*

VOLUME /usr/src/blog

ENTRYPOINT ["bundle", "exec", "jekyll", "serve", "--host=0.0.0.0", "--config=_config.yml,_config.dev.yml"]
