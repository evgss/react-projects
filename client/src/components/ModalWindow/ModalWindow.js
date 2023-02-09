import './modalwindow.css'

export default function ModalWindow({active, setActive, deleteHandler}) {

    return (
        <div className={active ? 'modalwindow active' : 'modalwindow'} onClick={() => setActive(!active)}>
            <div className='modalwindow__main' onClick={e => e.stopPropagation()}>
                <div className='modalwindow__main__title'>Вы действительно хотите удалить новость ?</div>
                <div className='modalwindow__main__buttons'>
                    <button className='modalwindow__main__delete' onClick={deleteHandler}>Удалить</button>
                    <button className='modalwindow__main__cancel' onClick={() => setActive(!active)}>Отмена</button>
                </div>

            </div>
        </div>
    )
}
