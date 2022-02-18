# K3S 
https://k3s.io/

## Install
```
  curl -sfL https://get.k3s.io | sh -
```
## Install withouth Traefik
```
  curl -sfL https://get.k3s.io | sh -s - --disable=traefik
```
## tokens location
```
  /var/lib/rancher/k3s/server/node-token
```
## Check status
```
  sudo systemctl status k3s
```
## Basic commands
```
  sudo kubectl get nodes
```

## Install on worker
```
curl -sfL https://get.k3s.io | K3S_URL=https://myserver:6443 K3S_TOKEN=mynodetoken sh -
--with-node-id
```

## RASPBERRY INFO
```
  https://medium.com/@fache.loic/k3s-traefik-2-9b4646393a1c
```

### Enable cgroup
```
  #cgroup_enable=cpuset # Not shure about this one
  cgroup_memory=1 cgroup_enable=memory
```                  

### Disable swap
```
  sudo dphys-swapfile swapoff && sudo systemctl disable dphys-swapfile.service
```

### Use iptables
```
  sudo iptables -F
  sudo update-alternatives --set iptables /usr/sbin/iptables-legacy
  sudo update-alternatives --set ip6tables /usr/sbin/ip6tables-legacy
```

### Debug commands
```
  cat /proc/cgroups
  cat /proc/cgroups | column -t
  cat /proc/cmdline
  cat /etc/debian_version
```




# k3s kubeconfig
```
  sudo cat /etc/rancher/k3s/k3s.yaml
```