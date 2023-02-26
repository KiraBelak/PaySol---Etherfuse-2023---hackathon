export default function hola() {
    return (
        <div>
            Enter
        </div>
    );
}

export async function getServerSideProps(ctx){


    return {
        props:{
            data:null
        }
    }
}
