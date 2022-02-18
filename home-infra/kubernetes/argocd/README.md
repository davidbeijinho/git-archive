# ArgoCD

## Install argo
```
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

## Port forward
```
kubectl port-forward svc/argocd-server -n argocd 8080:443
```

## Get the password
```
kubectl get pods -n argocd -l app.kubernetes.io/name=argocd-server -o name | cut -d'/' -f 2
```

## Login into argo
```
argocd login PORT_FORWARD_IP:8080
```

# Create app
```
argocd app create apps \
--repo https://github.com/davidbeijinho/home-infra.git \
--path gitops \
--dest-server https://kubernetes.default.svc \
--dest-namespace default 
```