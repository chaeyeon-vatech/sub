import {useQuery} from "@apollo/react-hooks";
import {TaskQuery} from "./query";
import {useEffect, useState} from "react";

export function Task() {


    const [task] = useQuery(TaskQuery);

    const [tasks, setTasks] = useState();

    useEffect(() => {
        if (task) {
            setTasks(task.tasks.creater);

        }
    }, [task]);

    return tasks;
}

export default Task;