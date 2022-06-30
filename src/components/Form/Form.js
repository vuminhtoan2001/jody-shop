import './Form.scss';

function Form({ className, id, action, children }) {
    return (
        <form action={action ?? action} className={className} id={id}>
            {children}
        </form>
    );
}

export default Form;
