---
bodyclass: page--knowledge-base
layout: article-tech
title: Using Weaviate
description: Technical documentation for using Weaviate.
topic: Building your first use case
author: BVL
relating-articles: []
previous-article: null
tags: ['Technology', 'Weaviate']
video-link: 
video-caption: 
---

## Access Tokens

Tokens and keys give you access to Weaviate's <abbr>API</abbr>’s. They are set in the header (`X-API-KEY: [[apiKey]]` and `X-API-TOKEN: [[apiToken]]`) and are formatted as a <abbr>UUID</abbr>; every key is related to a request if you create a thing or action, the key that you use will be attached to this object. You can create as many keys and children of keys, creating a new key automatically makes the key a child of the request key.

When starting Weaviate for the first time, the tokens will be displayed in the command line. It is advised to directly refresh the tokens.

The rules for keys within Weaviate are:

1. A new key created by a request key will make the new key a child of the request key.
2. A parent key always has access to a child key.

Requesting information about the current key can be done like this:

```
$ curl -X GET -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" "https://weaviate-host/weaviate/v1/keys/me"
```

Requesting an overview of children of a key can be done like this:

```
$ curl -X GET -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" "https://weaviate-host/weaviate/v1/keys/me/children"
```

A child key can be created like this:

```
$ curl -X POST -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" "https://weaviate-host/weaviate/v1/keys"
```

And information from a specific child key can be requested like this:

```
$ curl -X GET -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" "https://weaviate-host/weaviate/v1/keys/{keyId}"
```

## Meta Informatiom

All Weaviate instances have a meta end-point that can be used to learn more about the instance. The meta endpoint contains the ontology and general information from the ontology files.

```
$ curl -X GET -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" "https://weaviate-host/weaviate/v1/meta"
```

## Creating Things &amp; Actions

Things and Actions are created based on the ontology. If you work with a Weaviate instance of which you don’t know the ontology, you can always request the ontologies via the meta end-point.

### Creating a Thing

You can create a thing by <abbr>POST</abbr>ing a body to the things endpoint. The body should contain the right values. In case the body can't be processed an error code will be returned.

#### body

```
{
	"@context": "http://example.org",
	"@class": "TestThing",
	"schema": {
		"testString": "string",
		"testInt": 1,
		"testBoolean": true,
		"testNumber": 0.1
	}
}
```

#### request

```
$ curl -X POST -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" -H "Content-Type: application/json" --data '[[DATA]]' "https://weaviate-host/weaviate/v1/things"
```

You can also validate a request by sending the body to the `/weaviate/v1/things/validate` end-point. Weaviate will validate the request without sending it to the database.

```
$ curl -X POST -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" -H "Content-Type: application/json" --data '[[DATA]]' "https://weaviate-host/weaviate/v1/things/validate"
```

### Creating an Action

Creating actions is similar to creating things. You can create an action by <abbr>POST</abbr>ing a body to the actions endpoint. The body should contain the right values. In case the body can't be processed an error code will be returned.

#### body

```
{
	"@context": "http://example.org",
	"@class": "TestAction",
	"schema": {
		"testString": "string",
		"testInt": 1,
		"testBoolean": true,
		"testNumber": 0.1
	}
}
```

#### request

```
$ curl -X POST -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" -H "Content-Type: application/json" --data '[[DATA]]' "https://weaviate-host/weaviate/v1/actions"
```

You can also validate a request by sending the body to the `/weaviate/v1/actions/validate` end-point. Weaviate will validate the request without sending it to the database.

```
$ curl -X POST -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" -H "Content-Type: application/json" --data '[[DATA]]' "https://weaviate-host/weaviate/v1/actions/validate"
```

## Listing Things &amp; Actions

When you've created things and actions, you can request a list with all things and actions. You can also set the following variables in the querystring.

| Key | Value
| --- | -----
| `maxResults` | Max amount of results as a number (i.e. `maxResults=5`)
| `page` | Page number (i.e., `page=2`)

### Things

```
$ curl -X GET -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" "https://weaviate-host/weaviate/v1/things"
```

**Actions**

```
$ curl -X GET -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" "https://weaviate-host/weaviate/v1/actions"
```

## Getting Things &amp; Actions

You can request a thing or an action based on its <abbr>UUID</abbr> or by using the GraphQL endpoint. In this you can learn how to fetch a thing or action if you know the <abbr>UUID</abbr>. You can learn more about using GraphQL [here](#).

### Things

```
$ curl -X GET -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" "https://weaviate-host/weaviate/v1/things/[[THING-ID]]"
```

### Actions

```
$ curl -X GET -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" "https://weaviate-host/weaviate/v1/actions/[[ACTION-ID]]"
```

## Updating Things &amp; Actions

You can update a thing or action when you know its UUID. 

### Updating Things

#### body

```
{
	"@context": "http://example.org",
	"@class": "TestThing",
	"schema": {
		"testString": "string",
		"testInt": 1,
		"testBoolean": true,
		"testNumber": 0.1
	}
}
```

#### request

```
$ curl -X PUT -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" -H "Content-Type: application/json" --data '[[DATA]]' "https://weaviate-host/weaviate/v1/things"
```

You can also validate a request by sending the body to the `/weaviate/v1/things/validate` end-point. Weaviate will validate the request without sending it to the database. Note that you need to use <abbr>POST</abbr> instead of <abbr>PUT</abbr>.

```
$ curl -X POST -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" -H "Content-Type: application/json" --data '[[DATA]]' "https://weaviate-host/weaviate/v1/things/validate"
```

### Updating Actions

#### body

```
{
	"@context": "http://example.org",
	"@class": "TestAction",
	"schema": {
		"testString": "string",
		"testInt": 1,
		"testBoolean": true,
		"testNumber": 0.1
	}
}
```

#### request

```
$ curl -X PUT -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" -H "Content-Type: application/json" --data '[[DATA]]' "https://weaviate-host/weaviate/v1/actions"
```

You can also validate a request by sending the body to the `/weaviate/v1/actions/validate` end-point. Weaviate will validate the request without sending it to the database. Note that you need to use <abbr>POST</abbr> instead of <abbr>PUT</abbr>.

```
$ curl -X POST -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" -H "Content-Type: application/json" --data '[[DATA]]' "https://weaviate-host/weaviate/v1/actions/validate"
```

## Patching Updating Things &amp; Actions

You can update a thing or action using [PATCH semantics](https://en.wikipedia.org/wiki/Patch_verb) when you know its <abbr>UUID</abbr>. 

### Patching Things

#### body

```
[{
	"op": "replace",
	"path": "/schema/testString",
	"value": "NEW VALUE"
}]
```

#### request

```
$ curl -X PATCH -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" -H "Content-Type: application/json" --data '[[DATA]]' "https://weaviate-host/weaviate/v1/things"
```

### Patching Actions

#### body

```
[{
	"op": "replace",
	"path": "/schema/testString",
	"value": "NEW VALUE"
}]
```

#### request

```
$ curl -X PATCH -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" -H "Content-Type: application/json" --data '[[DATA]]' "https://weaviate-host/weaviate/v1/actions"
```

## Remove Things and Actions

...

## Using GraphQL

To easily query Weaviate, it is the most easy to use GraphQL. You can learn more about what GraphQL is [here](http://graphql.org/).

The end-point for GraphQL is always the same.

```
$ curl -X POST -H "X-API-KEY: [[apiKey]]" -H "X-API-TOKEN: [[apiKey]]" -H "Content-Type: application/json" --data '[[DATA]]' "https://weaviate-host/weaviate/v1/graphql"
```

The body should contain the GraphQL query.

### List Things

```
listThings(first: X, offset: Y, class: Z) {
    things {
        ...
    }
    totalResults
}
```


### Actions

...

### Keys

...

## Complete <abbr>API</abbr> overview.

...