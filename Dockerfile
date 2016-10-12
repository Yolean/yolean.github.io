FROM ruby

RUN mkdir /usr/src/blog
WORKDIR /usr/src/blog
COPY Gemfile .

RUN bundle install

# https://github.com/jekyll/jekyll-watch
