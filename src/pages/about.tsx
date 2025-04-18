import type { Route } from "./+types/home";
export function meta({ }: Route.MetaArgs) {
    return [
        { title: "about us" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}
const About = () => {
    return (
        <div>About</div>
    )
}

export default About