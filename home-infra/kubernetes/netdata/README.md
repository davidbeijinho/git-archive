# Netdata

# Create namespace
```
    kubectl apply -f namespace.yaml
```

# Deploy Netdata
```
    kubectl apply -f deployment.yaml
```

# Deploy Netdata service
```
    kubectl apply -f service.yaml
```

# Netdata app insecure
```
    kubectl apply -f ingressRoute.yaml 
```

# Netdata app secure version
```
    kubectl apply -f ingressRoute-secure.yaml 
```
