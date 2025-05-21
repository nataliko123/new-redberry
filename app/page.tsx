import Header from "./components/Header";
import Selects from "./components/Selects";
import Progress from "./components/Progress";
import PriorityButton from "./components/Buttons/PriorityButton";
import CustomButton from "./components/Buttons/CustomButton";
import Card from "./components/Card";
export default function HomePage() {
  return (
    <div>
      <Header />
      <Selects />
      <Progress color="yellow" statusList={[{ id: 1, name: "დასაწყები" }]} />
      <PriorityButton priority="high" size="big" />
      <PriorityButton priority="medium" size="small" />
      <PriorityButton priority="low" size="big" />
      <CustomButton color="pink" text="დიზაინი" />
      <CustomButton color="orange" text="მარკეტინგი" />
      <CustomButton color="blue" text="ლოგისტიკა" />
      <CustomButton color="yellow" text="ინფ.ტექ." />
      <Card
        priority="high"
        color="pink"
        border="pink"
        taskName={"Task Name"}
        description={"Task Description"}
        dueDate={"2023-10-10"}
        totalComments={5}
        departmentName={"Design"}
      />
    </div>
  );
}
