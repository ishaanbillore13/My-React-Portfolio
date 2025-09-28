import { 
    AngularIcon,
    ReactIcon , 
    AWSIcon , 
    BootstrapIcon, 
    DockerIcon, 
    GitIcon, 
    GithubActionsIcon, 
    GithubIcon, 
    GitlabIcon, 
    KubernetesIcon, 
    MaterialUIIcon, 
    MysqlIcon, 
    PostmanIcon, 
    SpringBootIcon, 
    OracleSqlDeveloperIcon, 
    BlueCorrectIcon,
    LinkedInIcon,
    GmailIcon,
    HtmlIcon,
    CssIcon,
    JavaIcon,
    JavascriptIcon,
    TypescriptIcon
} from ".";

const icons = {
    AngularIcon: AngularIcon,
    ReactIcon: ReactIcon,
    AWSIcon: AWSIcon,
    BootstrapIcon: BootstrapIcon,
    DockerIcon: DockerIcon,
    GitIcon: GitIcon,
    GithubActionsIcon: GithubActionsIcon,
    GithubIcon: GithubIcon,
    GitlabIcon: GitlabIcon,
    KubernetesIcon: KubernetesIcon,
    MaterialUIIcon: MaterialUIIcon,
    MysqlIcon: MysqlIcon,
    PostmanIcon: PostmanIcon,
    SpringBootIcon: SpringBootIcon,
    OracleSqlDeveloperIcon: OracleSqlDeveloperIcon,
    BlueCorrectIcon: BlueCorrectIcon,
    LinkedInIcon: LinkedInIcon,
    GmailIcon: GmailIcon,
    HtmlIcon: HtmlIcon,
    CssIcon: CssIcon,
    JavaIcon: JavaIcon,
    JavascriptIcon: JavascriptIcon,
    TypescriptIcon: TypescriptIcon
}

export default function Icon({name,size}){
    const IconComponent = icons[name];
    if(!IconComponent) return <span>{name}</span>
    return <IconComponent width={size} height={size} />
};