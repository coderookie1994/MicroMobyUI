
export interface ContainerState {
    containers: any
}

export interface Container {
    id: string;
    imageId: string;
    image: string;
    state: string;
}

export const DefaultContainerState: ContainerState = {
    containers: [
        // {
        //     id: '',
        //     image: '',
        //     imageId: ''
        // }
    ]
}

// type Container struct {
//     ID string `json:"Id"`
//     Names []string
//     Image string
//     ImageID string
//     Command string
//     Created int64
//     Ports []Port
//     SizeRw int64 `json:",omitempty"`
//     SizeRootFs int64 `json:",omitempty"`
//     Labels map[string]string
//     State string
//     Status string
//     HostConfig struct {
//         NetworkMode string `json:",omitempty"`
//     }
//     NetworkSettings *SummaryNetworkSettings
//     Mounts []MountPoint
// }