import NavigationGroup, { navigationObject } from "@/components/NavigationGroup"
import { PageLayout } from "../layout"
import "../../styles/content-block/content-block.css";
import "../../styles/buttons.css";
import SurpriseMe from "@/components/SurpriseMe";
import { promises as fs } from 'fs';

export default async function Projects() {
    // grab the list of all the project-groups: ["ts-js", "python", "flutter", etc]
    const projectGroupFile = await fs.readFile(process.cwd() + '/src/app/json/project-groups.json', 'utf8');
    const sections: navigationObject[] = JSON.parse(projectGroupFile).data;

    return (
        <PageLayout>
            <NavigationGroup sections={sections} title="Project Categories" />
            <SurpriseMe sections={sections} />
        </PageLayout>
    )
}