import {React, useState, useEffect} from 'react';
import Axios from 'axios';

const Contributions = () => {

    const [contribution, setContrib] = useState("");
    const [repoLink, setRepolink] = useState("");
    const [allRepos, setAllrepos] = useState([{name: "", url: ""}]);
    const [backupRepo, setbackupRepo] = useState("");
    const [index, setIndex] = useState(0);
    const [done, setDone] = useState(false);
    useEffect(() => {
        // TODO: Check to see if I have anything in the repo and the contribution
        // TODO: Get description of the featured GitHub Repo
        // https://docs.github.com/en/rest/reference/activity#list-public-events-for-a-user
        // Use Github API to get most recent push
        Axios.get("https://api.github.com/users/vu-dylan/events/public", {
            params: {per_page: 70}
        }).then((res) => {
            console.log(res.data);
            let allPush = [];
            let first = true;

            // Iterate through all events and get only push events to display
            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i].type === 'PushEvent') {
                    let name = res.data[i].repo.name.split('/').at(-1);
                    if (first) {
                        first = false;
                        console.log(name)
                        setContrib(name);
                        setRepolink("https://github.com/" + res.data[i].repo.name);
                    }
                    allPush.push({name: name, url: "https://github.com/" + res.data[i].repo.name})
                }
            }
            // Remove duplicates
            // https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
            allPush = [...new Map(allPush.map(v => [JSON.stringify(v), v])).values()]
            // Remove first element, which is the most recent thing
            allPush.shift();
            setDone(true);
            setAllrepos(allPush);
        });
    }, []);

    useEffect(() => {
        if (done) {
            Type(allRepos[index].name);
        }
    }, [allRepos]);

    function Type(text) {
		let currText = text[0];
		let i = 0;
		// Animate "typing"
		setTimeout(() => {
			let textHandle = setInterval(() => {
				setbackupRepo(currText);
				i++;
				currText = currText + text[i];
				if (i >= text.length) {
                    setTimeout(() => {
                        // Getting some weird stuff with accessing states inside this function, so just set it again and delete it
                        DeleteText(text);
                    }, 3000)
					clearInterval(textHandle);
				}
			}, 60);
		}, 600);
    }

    function DeleteText(text) {
        let i = text.length;
        // Animate "deletion"
        setTimeout(() => {
			let textHandle = setInterval(() => {
				setbackupRepo(text.slice(0,i));
				i--;
				if (i < 0) {
					clearInterval(textHandle);
                    // Now we cycle to the next repo
                    if (index + 1 >= allRepos.length) {
                        setIndex(0)
                    } else {
                        setIndex(index + 1);
                    }
				}
			}, 60);
		}, 600);
    }

    useEffect(() => {
        if (done) {
            Type(allRepos[index].name);
        }
    }, [index]);

    return (
        <div className="contribution">
            <div>
                The last thing I've worked on was <span><a href={repoLink} target="_blank" rel="noreferrer">{contribution}</a></span>!
            </div>
            <div>
                Think that's pretty cool? Or maybe it wasn't your cup of tea? What about <span><a href={allRepos[index].url} target="_blank" rel="noreferrer">{backupRepo}</a></span>?
            </div>
        </div>
    )
}

export default Contributions