import styles from '../styles/Eom.module.css'
export default function EOM( { Employee }) {

    console.log(Employee);
    return(
        <div className= 'page-container'>
        
        <div className = { styles.main }>
            <h1>Employee of the month</h1>
            <div className =  { styles.EmployeeOfMonth }>
            <h3>{ Employee.name }</h3>
            <h6>{ Employee.position } </h6>
            <img clasName='img1' src ={Employee.image} />
            <p> {Employee.description}</p>
            </div>
        </div>
        </div>
        
    );
};

export async function getServerSideProps(context)  {
    const apiResponse = await fetch(  'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth',);
    const Employee = await apiResponse.json();

    return{
        props: {
            Employee
        }
    }

};

    
    
