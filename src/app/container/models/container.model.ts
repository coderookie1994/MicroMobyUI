
export interface ContainerState {
    Id: string;
    ImageId: string;
    Image: string;
}

export const DefaultContainerState: ContainerState = {
    Id: '',
    Image: '',
    ImageId: ''
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