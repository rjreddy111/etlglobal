import  { PieChart, Pie, Cell, Tooltip, Legend } from "recharts"

const PieChartConfig = (props)=> {
    const {attemptedQuestions,unattempted} = props 
    const pieData = [{name: "Attempted", value:attemptedQuestions}, { name:"Unattempted", value:unattempted}]
    const COLORs = ["#4caf50", "#f44336"]
    return (
        <PieChart width= {250} height = {250} >
            <Pie data = {pieData} dataKey="value" nameKey="name"  cx="50%" cy = "50%" fill="#8884d8" label> 

            {pieData.map((entry,index)=> (
                <Cell key = {`cell-${index}`} fill = {COLORs[index % COLORs.length]}  />
            ))}
                
            </Pie>
            <Tooltip/>
            <Legend/>



        </PieChart>

    )
}



export default PieChartConfig