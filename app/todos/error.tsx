'use client';

export default function TodoErrorPage(props: {
    error: Error,
    reset: () => void
}) {
    return (<div className={'container h-screen text-center p-56'}>
        <h1 className={'text-5xl text-orange-700'}>Error Page : {props.error.message}</h1>
    </div>)
}