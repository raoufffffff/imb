import { useEffect } from "react"

const About = () => {
    useEffect(() => {
        window.scrollTo({
            behavior: "smooth",
            top: 0
        })
    }, [])
    return (
        <div>About</div>
    )
}

export default About