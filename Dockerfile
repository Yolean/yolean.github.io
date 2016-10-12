FROM ruby

RUN mkdir /usr/src/blog
WORKDIR /usr/src/blog

RUN echo "source 'https://rubygems.org'" > Gemfile \
  && echo "gem 'github-pages', group: :jekyll_plugins" >> Gemfile \
  && bundle install

# https://github.com/jekyll/jekyll-watch
