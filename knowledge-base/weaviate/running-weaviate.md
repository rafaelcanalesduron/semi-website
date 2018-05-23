---
layout: article-tech
title: Running Weaviate
description: Technical documentation for running Weaviate.
topic: Weaviate
author: BVL
relating-articles: []
previous-article: null
tags: ['Technology', 'Weaviate']
---

## Download Binary

### Directly Download and Install

Latest Version {{ site.weaviate_version }} (stable):

```
$ mkdir -p /var/weaviate
$ cd /var/weaviate
$ curl -o weaviate https://storage.cloud.google.com/weaviate-dist/releases/{{ site.weaviate_version }}/weaviate_$(echo `uname`|tr '[:upper:]' '[:lower:]')_amd64.zip
$ chmod +x weaviate
$ export PATH=/var/weaviate:$PATH
```

Nightly (unstable):

```
$ mkdir -p /var/weaviate
$ cd /var/weaviate
$ curl -o weaviate https://storage.cloud.google.com/weaviate-dist/releases/nightly/weaviate_nightly_amd64.zip
$ chmod +x weaviate
$ export PATH=/var/weaviate:$PATH
```

### Manually Download and Install

| Lastest Stable ({{ site.weaviate_version }}) | Nightly (unstable) | 
| ----------------- | ------------------ |
| [weaviate_darwin_386.zip](https://storage.cloud.google.com/weaviate-dist/releases/{{ site.weaviate_version }}/weaviate_darwin_386.zip)| [weaviate_darwin_386.zip](https://storage.cloud.google.com/weaviate-dist/releases/nightly/weaviate_darwin_386.zip)
| [weaviate_darwin_amd64.zip](https://storage.cloud.google.com/weaviate-dist/releases/{{ site.weaviate_version }}/weaviate_darwin_amd64.zip)| [weaviate_darwin_amd64.zip](https://storage.cloud.google.com/weaviate-dist/releases/nightly/weaviate_darwin_amd64.zip)
| [weaviate_linux_386.zip](https://storage.cloud.google.com/weaviate-dist/releases/{{ site.weaviate_version }}/weaviate_linux_386.zip)| [weaviate_linux_386.zip](https://storage.cloud.google.com/weaviate-dist/releases/nightly/weaviate_linux_386.zip)
| [weaviate_linux_amd64.zip](https://storage.cloud.google.com/weaviate-dist/releases/{{ site.weaviate_version }}/weaviate_linux_amd64.zip)| [weaviate_linux_amd64.zip](https://storage.cloud.google.com/weaviate-dist/releases/nightly/weaviate_linux_amd64.zip)
| [weaviate_linux_arm.zip](https://storage.cloud.google.com/weaviate-dist/releases/{{ site.weaviate_version }}/weaviate_linux_arm.zip)| [weaviate_linux_arm.zip](https://storage.cloud.google.com/weaviate-dist/releases/nightly/weaviate_linux_arm.zip)
| [weaviate_linux_mips.zip](https://storage.cloud.google.com/weaviate-dist/releases/{{ site.weaviate_version }}/weaviate_linux_mips.zip)| [weaviate_linux_mips.zip](https://storage.cloud.google.com/weaviate-dist/releases/nightly/weaviate_linux_mips.zip)
| [weaviate_linux_mips64.zip](https://storage.cloud.google.com/weaviate-dist/releases/{{ site.weaviate_version }}/weaviate_linux_mips64.zip)| [weaviate_linux_mips64.zip](https://storage.cloud.google.com/weaviate-dist/releases/nightly/weaviate_linux_mips64.zip)
| [weaviate_linux_mips64le.zip](https://storage.cloud.google.com/weaviate-dist/releases/{{ site.weaviate_version }}/weaviate_linux_mips64le.zip)| [weaviate_linux_mips64le.zip](https://storage.cloud.google.com/weaviate-dist/releases/nightly/weaviate_linux_mips64le.zip)
| [weaviate_linux_mipsle.zip](https://storage.cloud.google.com/weaviate-dist/releases/{{ site.weaviate_version }}/weaviate_linux_mipsle.zip)| [weaviate_linux_mipsle.zip](https://storage.cloud.google.com/weaviate-dist/releases/nightly/weaviate_linux_mipsle.zip)
| [weaviate_linux_ppc64.zip](https://storage.cloud.google.com/weaviate-dist/releases/{{ site.weaviate_version }}/weaviate_linux_ppc64.zip)| [weaviate_linux_ppc64.zip](https://storage.cloud.google.com/weaviate-dist/releases/nightly/weaviate_linux_ppc64.zip)
| [weaviate_linux_ppc64le.zip](https://storage.cloud.google.com/weaviate-dist/releases/{{ site.weaviate_version }}/weaviate_ninux_ppc64le.zip)| [weaviate_linux_ppc64le.zip](https://storage.cloud.google.com/weaviate-dist/releases/nightly/weaviate_ninux_ppc64le.zip)
| [weaviate_windows_386.zip](https://storage.cloud.google.com/weaviate-dist/releases/{{ site.weaviate_version }}/weaviate_windows_386.zip)| [weaviate_windows_386.zip](https://storage.cloud.google.com/weaviate-dist/releases/nightly/weaviate_windows_386.zip)
| [weaviate_windows_amd64.zip](https://storage.cloud.google.com/weaviate-dist/releases/{{ site.weaviate_version }}/weaviate_windows_amd64.zip)| [weaviate_windows_amd64.zip](https://storage.cloud.google.com/weaviate-dist/releases/nightly/weaviate_windows_amd64.zip)
| ----------------- | ------------------ |
| [Checksum file](https://storage.cloud.google.com/weaviate-dist/releases/{{ site.weaviate_version }}/checksums.txt) | [Checksum file](https://storage.cloud.google.com/weaviate-dist/releases/nightly/checksums.txt)

### Build Status

| Branch | Status        |
| ------ |:-------------:|
Master   | [![Build Status](https://api.travis-ci.org/creativesoftwarefdn/weaviate.svg?branch=master)](https://travis-ci.org/creativesoftwarefdn/weaviate/branches)
Develop  | [![Build Status](https://api.travis-ci.org/creativesoftwarefdn/weaviate.svg?branch=develop)](https://travis-ci.org/creativesoftwarefdn/weaviate/branches)
 
## Run with Docker

Make sure to have `weaviate.conf.json` ([creating a configuration file](#configure-weaviate)) in the same directory and to set the runtime variables in `docker-compose.yml`.

```
$ git clone github.com/creativesoftwarefdn/weaviate
$ cd weaviate
$ docker-compose up
```

## Configure Weaviate

<section class="help">
You can download an example file <a href="https://github.com/creativesoftwarefdn/weaviate/blob/master/weaviate.conf.json)">here</a>.
</section>

Weaviate settings can be created in a <abbr>JSON</abbr> config file in an array of `environments` this means that you can have multiple settings in one configuration file.

| environments[].key                            | Value         |
| --------------------------------------------- | ------------- |
| `name`                                          | Name of the instance |
| `database`                                      | Database settings. [Learn more](#available-databases) |
| `cache.name`                                    | Name of the cache. Available = dataloader |
| `schemas.Thing`                                 | Path or URL to Things Schema. [Learn more](#available-databases) |
| `schemas.Action`                                | Path or URL to Actions Schema. [Learn more](#available-databases) |
| `broker.host`                                   | MQTT broker hostname (still in development) |
| `broker.port`                                   | MQTT broker port (still in development) |
| `limit`                                         | Limit of list requests |
| `debug`                                         | Boolean (output in cli) |

### Example Configuration

```
{
  "environments": [{
    "name": "cassandra",
    "database": {
      "name": "cassandra",
        "database_config": {
            "host": "127.0.0.1",
            "port": 7000,
            "keyspace": "weaviate"
        }
    },
    "cache": {
      "name": "dataloader"
    },
    "schemas": {
      "Thing": "thing-schema.json",
      "Action": "action-schema.json"
    },
    "broker": {
      "host": "localhost",
      "port": 1883
    },
    "limit": 100,
    "debug": true
  }]
}
```

### For Development

You can add custom development settings.

| environments[].key                            | Value         |
| --------------------------------------------- | ------------- |
| `development.external_instances[].url`          | Url of external Weaviate |
| `development.external_instances[].api_key`      | Related API key for external Weaviate |
| `development.external_instances[].api_token`    | Related API token for external Weaviate |

#### Example Configuration

```
{
  "environments": [{
    // ALL OTHER CONFIGURATIONS
    "development": {
      "external_instances": [{
          "url": "http://localhost:8070",
          "api_key": "a310f32d-0b0b-4b18-9349-8bd986822217",
          "api_token": "2cc8b504-b429-439e-87d0-d2a17f2bbcf7"
        },
        {
          "url": "http://127.0.0.1:8070",
          "api_key": "a310f32d-0b0b-4b18-9349-8bd986822217",
          "api_token": "2cc8b504-b429-439e-87d0-d2a17f2bbcf7"
        }
      ]
    }
  }]
}
```

## Available Databases

<section class="help">
Learn more about the database architecture <a href="/weaviate/concept-in-a-nutshell/#database-agnostic">here</a>.
</section>

Weaviate is connected to a database through a connector. You can also [create other connectors](/weaviate/create-a-database-connector/).

### Cassandra

Add to the "database" section of the [configuration](#configure-weaviate) the following settings.

```
"database": {
    "name": "cassandra", // name of the connector
    "database_config": {
        "host": "127.0.0.1", // cassandra host
        "port": 7000, // cassandra port
        "keyspace": "weaviate" // cassandra keyspace
    }
}
```

You can also run Cassandra with Docker directly

```
docker run -t --name weaviate_db_1_travis -e CASSANDRA_BROADCAST_ADDRESS=127.0.0.1 -p 7000:7000 -p 9042:9042 -v ~/cassandra:/var/lib/cassandra -d cassandra:3
```

<section class="help">
Weaviate's <a href="#run-with-docker">docker compose</a> also contains Cassandra.
</section>

## Ontology Schemas for Things and Actions

<section class="help">
Learn more about web semantics and the value of ontologies <a href="/weaviate/concept-in-a-nutshell/">here</a>.
</section>

One of the core features of Weaviate are the ontologies. You will use the ontologies to define what specific data means. For example, you can define that when you store data about an apple, it refers to the fruit “apple” or the company “Apple”. You have to do this both for “things” and for “actions”.

### Defining a Things Ontology

<section class="help">
Classes should always be written with a capital.
</section>

Ontologies are defined in a <abbr>JSON</abbr> file and should contain the following information;

| Key                                 | Value         |
| ----------------------------------- | ------------- |
| `@context`                          | Context url. For example: `http://example.org` |
| `type`                              | `thing` or `action` |
| `version`                           | [Semantic Versioning](https://semver.org/) version number. For example: `1.0.1`|
| `name`                              | Name of the ontology |
| `maintainer`                        | Email of the maintainer |
| `classes[].class`                   | Class (start with a capital). For example: `Company` |
| `classes[].description`             | Description of the class |
| `classes[].kinds[].kind`            | Kind of class to better define what "kind" of class it is. For example: `Organization` |
| `classes[].kinds[].weight`          | Importance of the kind. Minimal value = `0.0`. Maximum value = `1.0` |
| `classes[].properties[].name`       | Name of the property (start with lowercase). For example: `name` |
| `classes[].properties[].description`| A description of the property. For example: `Name of the company` |
| `classes[].properties[].@dataType[]`| Datatype of the property. Available types are: `string`, `int`, `boolean`, `number`, `date`, `[name of class]` (for example: `Country`, always with capital) |

### Example of Things ontology <abbr>JSON</abbr>

```
{
  "@context": "http://example.org",
  "type": "thing",
  "version": "1.0.0",
  "name": "Thing Example",
  "maintainer": "hello@creativesoftwarefdn.org",
  "classes": [{
    "class": "Company",
    "description": "This is an example of a Company",
    "kinds": [{
      "kind": "Organization",
      "weight": 0.9
    }, {
      "kind": "exampleThing1KindB",
      "weight": 0.8
    }],
    "properties": [{
        "name": "name",
        "@dataType": [
          "string"
        ],
        "description": "example of a string."
      },
      {
        "name": "exampleCref",
        "@dataType": [
          "Country"
        ],
        "description": "Value of a cref."
      }
    ]
  }, {
    "class": "Country",
    "description": "This is an example of a Country",
    "kinds": [{
      "kind": "Location",
      "weight": 0.5
    }],
    "properties": [{
      "name": "name",
      "@dataType": [
        "string"
      ],
      "description": "example of a string."
    }]
  }]
}
```

<section class="help">
You can find a simple example <a href="https://github.com/creativesoftwarefdn/weaviate/tree/master/test/schema">here</a> or a more complex example <a href="https://github.com/creativesoftwarefdn/weaviate-semantic-schemas">here</a>.
</section>

## Run Weaviate

With a configuration file and two ontologies (things and actions) you can start running Weaviate.

<section class="help">
Make sure to fetch the API-token and API-key when running Weaviate for the first time.
</section>


### Running a Basic Instance

_Note: Assumes the database is running and configuration files are set._

```
$ weaviate --scheme=http --port=8080 --host=127.0.0.1 --config="cassandra_docker" --config-file="./weaviate.conf.json"
```

### Getting Help

```
$ weaviate --help
```

### Arguments

| Argument               | Description
|  --------------------- | ------------
| `--scheme=`            | the listeners to enable, this can be repeated and defaults to the schemes in the swagger spec
| `--cleanup-timeout=`   | grace period for which to wait before shutting down the server (default: 10s)
| `--max-header-size=`   | controls the maximum number of bytes the server will read parsing the request header's keys and values, including the request line. It does not limit the size of the request body. (default: 1<abbr>MiB</abbr>)
| `--socket-path=`       | the unix socket to listen on (default: /var/run/weaviate.sock)
| `--host=`              | the <abbr>IP</abbr> to listen on (default: localhost) [$HOST]
| `--port=`              | the port to listen on for insecure connections, defaults to a random value [$PORT]
| `--listen-limit=`      | limit the number of outstanding requests
| `--keep-alive=`        | sets the <abbr>TCP</abbr> keep-alive timeouts on accepted connections. It prunes dead <abbr>TCP</abbr> connections ( e.g. closing laptop mid-download) (default: 3m)
| `--read-timeout=`      | maximum duration before timing out read of the request (default: 30s)
| `--write-timeout=`     | maximum duration before timing out write of the response (default: 60s)
| `--tls-host=`          | the <abbr>IP</abbr> to listen on for <abbr>TLS</abbr>, when not specified it's the same as --host [$TLS_HOST]
| `--tls-port=`          | the port to listen on for secure connections, defaults to a random value [$TLS_PORT]
| `--tls-certificate=`   | the certificate to use for secure connections [$TLS_CERTIFICATE]
| `--tls-key=`           | the private key to use for secure conections [$TLS_PRIVATE_KEY]
| `--tls-ca=`            | the certificate authority file to be used with mutual tls auth [$TLS_CA_CERTIFICATE]
| `--tls-listen-limit=`  | limit the number of outstanding requests
| `--tls-keep-alive=`    | sets the <abbr>TCP</abbr> keep-alive timeouts on accepted connections. It prunes dead <abbr>TCP</abbr> connections ( e.g. closing laptop mid-download)
| `--tls-read-timeout=`  | maximum duration before timing out read of the request
| `--tls-write-timeout=` | maximum duration before timing out write of the response
| `--config=`            | the section inside the config file that has to be used
| `--config-file=`       | path to config file (default: ./weaviate.conf.json)

#### Understanding <abbr>LOG</abbr>s

When running Weaviate, all logs will be visible in the <abbr>CLI</abbr>. The logs will also contain the root <abbr>API</abbr> tokens. Make sure to refresh them after starting the server.

### Debugging

When debugging is enabled in the config file, information will be displayed in the <abbr>CLI</abbr> as `DEBUG`.

[back](../)