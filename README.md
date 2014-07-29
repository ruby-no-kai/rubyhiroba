rubyhiroba
==========

RubyHiroba is kinda Ruby event. You rubyists can join hackathon, workshop, tutorial and unconference. Hiroba(広場) means playing field in Japanese.

## Installation & Usage

Use middleman to do live development and middleman build to render static file output to the /build/ directory.
For full Middleman documentation, visit the [Middleman website](http://middlemanapp.com/).

```
gem install middleman
```

Start by installing Bundler, if you don't already have it:

```
gem install bundler
```


Clone the repository down to your local machine:

```
git clone https://github.com/ruby-no-kai/rubyhiroba.git
```

Change directories into this project and Bundle:

```
cd rubyhiroba
bundle install
```

Start the preview server:

```
bundle exec middleman
```

Finally, you will want to build this project into a stand-alone site. From the project directory:

```
bundle exec middleman build
```

Deploys a middleman built site via git:

```
bundle exec middleman deploy
```