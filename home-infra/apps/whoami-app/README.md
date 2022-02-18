# Whoami

# Create namespace
```
    kubectl apply -f namespace.yaml
```

# Deploy whoami
```
    kubectl apply -f deployment.yaml
```

# Deploy whoami service
```
    kubectl apply -f service.yaml
```

# Whoami app insecure
```
    kubectl apply -f ingressRoute.yaml 
```

# Whoami app secure version
```
    kubectl apply -f ingressRoute-secure.yaml 
```
