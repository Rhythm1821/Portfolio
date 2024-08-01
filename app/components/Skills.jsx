import { SKILLS } from "../constants";

export default function Skills(){
    return (
        <div className="mt-20">
            <div 
             className="flex flex-col items-center justify-center">
                <h2 className="my-12 text-center text-2xl font-semibold uppercase tracking-wider text-slate-100">
                    Skills
                </h2>
                <ul>
                    {
                        SKILLS.map((skill,index)=>(
                            <li key={index}
                            className="m-10 border-b border-slate-400 py-2 text-2xl tracking-tighter lg:py-10 lg:text-4xl">
                                {skill}
                            </li>
                        ))
                    }
                </ul>
             </div>
        </div>
    )
}