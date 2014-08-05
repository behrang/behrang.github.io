
all: _site

run: build
	@jekyll serve --watch

_site: build
	@jekyll build
	@touch $@

build: components lib/**/*
	@component build
	@cp build/build.js _includes/scripts.js
	@touch $@

components: component.json lib/*/component.json
	@component install
	@touch $@

clean:
	@rm -fr _site build components

.PHONY: all run clean
