// import Demo from "./components/conditional_rendering/Demo";
// import Combined from "./components/events/Combined";
// import Event from "./components/events/Event";
// import Form_Concept from "./components/forms/Form_Concept";
// import MapDemo from "./components/map_array_filter_concepts/MapDemo";
// import StudentDetails from "./components/props_concepts/StudentDetails";
// import StudentDetailsClassComponent from "./components/props_concepts/StudentDetailsClassComponent";
// import UsingDestructring from "./components/props_concepts/UsingDestructring";
// import Clock from "./components/state/Clock";
// import CurrentTime from "./components/state/CurrentTime";
// import StudentCount from "./components/state/StudentCount";
// import UsingClass from "./components/state/UsingClass";

import LifeCycleMount from "./components/lifeCycle/LifeCycleMount";

function App() {
  return (
    <div className="App">
      {/* Functional Componets property
      <StudentDetails id={101} name={"Parthiban"} age={29} />
      <StudentDetails id={102} name={"Madhu"} age={32} />
      <StudentDetails id={103} name={"Ganapathi"} age={26} />

      {/* Class components property  */}
      {/* <StudentDetailsClassComponent id={201} name={"Manoj"} age={24} />
      <StudentDetailsClassComponent id={202} name={"kumar"} age={25} />
      <StudentDetailsClassComponent id={203} name={"Malaravan"} age={26} /> */}

      {/* Using Destructuring */}
      {/* <UsingDestructring id={301} name={"Sastik"} age={12} />
      <UsingDestructring id={302} name={"viswak"} age={10} />
      <UsingDestructring id={303} name={"Haran"} age={8} /> */}

      {/* Using Map
      <MapDemo />  */}

      {/* Using Event
      <Event/> */}
      {/* <Combined/> */}

      {/* Using State */}
      {/* <StudentCount />
      <CurrentTime />
      <UsingClass />
      <Clock />
      <Demo/> */}

      {/* Form Concepts */}
      {/* <Form_Concept/> */}

      {/* Life Cycle Concepts */}
      <LifeCycleMount/>
    </div>
  );
}

export default App;
