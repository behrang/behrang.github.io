
all: _site

run: build
	@bundle exec jekyll serve --watch

_site: build
	@bundle exec jekyll build
	@touch $@

build: components lib/**/*
	@component build
	@cp build/build.js _includes/scripts.js
	@cp build/build.css _includes/styles.css
	@touch $@

components: component.json lib/*/component.json
	@component install
	@touch $@

clean:
	@rm -fr _site build components

.PHONY: all run clean
