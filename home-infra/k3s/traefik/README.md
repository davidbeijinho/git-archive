# Traefik v2 on k3s
```
    kubectl apply -f ./crd.yaml
```

```
    kubectl apply -f ./deployment.yaml
```

## Install with staging caserver
```
helm install \
    --set="additionalArguments={  \
        --certificatesresolvers.myresolver.acme.tlschallenge  \
        --certificatesresolvers.myresolver.acme.caserver=https://acme-staging-v02.api.letsencrypt.org/directory \
        --certificatesresolvers.myresolver.acme.email=EMAIL@example.com  \
        --certificatesresolvers.myresolver.acme.storage=acme.json  \
        --log.level=DEBUG  \
        }" \
    traefik traefik/traefik
```

## install for production
```
helm install \
    --set="additionalArguments={  \
        --certificatesresolvers.myresolver.acme.tlschallenge  \
        --certificatesresolvers.myresolver.acme.email=EMAIL@example.com  \
        --certificatesresolvers.myresolver.acme.storage=acme.json  \
        --log.level=DEBUG  \
        }" \
    traefik traefik/traefik
```


 -o table --dry-run >> traefik-helm.yaml
