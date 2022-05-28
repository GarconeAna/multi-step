import { useState } from "react";
import SignInfo from "./SignInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";

function Form() {
    const [page, setpage] = useState(0);

    const Titles = ["Sign", "Personal", "Other"];

    const NextPage = () => {
        setpage((currPage) => currPage + 1);
    } 

    const PrevPage = () => {
        setpage((currPage) => currPage - 1);
    } 

    const PageDisplay = () => {
        if (page === 0) {
            return <SignInfo/>
        } else if (page === 1) {
            return <PersonalInfo/>
        } else {
            return <OtherInfo/>
        }
    }
    return <div className="form">
        <div className="progress"></div>
        <div className="container">
            <div className="titles">
                <h1>{Titles[page]}</h1>
            </div>
            <div className="display">{PageDisplay()}</div>
            <div className="buttons">
                <button disabled={page === 0} onClick={PrevPage}>prev</button>
                <button disabled={page === Titles.length - 1} onClick={NextPage}>next</button>
            </div>
        </div>
    </div>
}

export default Form;