import React from 'react';

const Home = () => {
    const deleteFromList = (e) => {
        document.querySelector('#list').removeChild(e.target.parentNode);
    }

    const addToList = () => {
        const list = document.querySelector('#list');
        let div = document.createElement('div');
        div.classList.add('is-flex', 'in-container', 'mt-3');
        let input = document.createElement('input');
        input.type = 'text';
        input.classList.add('input', 'inText');
        input.placeholder = 'Type here';
        let fas = document.createElement('i');
        fas.classList.add('fas', 'fa-trash-alt', 'button', 'btn-delete');
        fas.addEventListener('click', deleteFromList)
        div.appendChild(input);
        div.appendChild(fas);
        list.appendChild(div);
    }

    function shuffle(listElems) {
        for (let i = listElems.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [listElems[i], listElems[j]] = [listElems[j], listElems[i]];
        }
        return listElems;
    }

    const rotateBtn = () => {
        document.querySelector('.btn-group').classList.toggle('is-hidden');
        document.querySelector('.btn-redo').classList.toggle('is-hidden');
    }

    const rndList = () => {
        const list = document.querySelector('#list');
        const listBlocks = document.querySelectorAll('#list .in-container');
        let toRandomize = [];
        listBlocks.forEach(element => {
            let val = element.querySelector('.inText').value;
            if (val !== '') toRandomize.push(val);
        });
        debugger;
        if (toRandomize.length === 0) return false;
        listBlocks.forEach(element => {
            element.classList.add('animate__animated', 'animate__fadeOutUp');
        });
        setTimeout(() => {
            listBlocks.forEach(element => {
                list.removeChild(element);
            });
            toRandomize = shuffle(toRandomize);
            toRandomize.forEach((elem, index) => {
                let div = document.createElement('div');
                div.classList.add('is-flex', 'mt-3', 'end-elem', 'animate__fadeInDown', 'animate__animated');
                let spanNum = document.createElement('span');
                spanNum.innerText = `${++index}.`;
                spanNum.className = 'is-size-3';
                let spanText = document.createElement('span');
                spanText.innerText = elem;
                spanText.classList.add('ml-2', 'is-size-3');
                div.appendChild(spanNum);
                div.appendChild(spanText);
                list.appendChild(div);
            });
            rotateBtn();
        }, 1000)
    }

    const redo = () => {
        const list = document.querySelector('#list');
        const listBlocks = document.querySelectorAll('#list .end-elem');
        listBlocks.forEach(element => {
            element.classList.add('animate__animated', 'animate__fadeOutUp');
        });
        setTimeout(() => {
            listBlocks.forEach(element => {
                list.removeChild(element);
            });
            rotateBtn();
        }, 1000)
    }

    return (
        <div className="Home is-flex mt-6">
            <div className="columns content-center">
                <div className="column is-half-desktop">
                    <div className="is-flex in-container btn-group">
                        <button className="button btn-primary btn-add" onClick={addToList}>Add box</button>
                        <button className="button btn-secondary btn-rnd" onClick={rndList}>Randomize</button>
                    </div>
                    <button className="button btn-secondary btn-redo is-hidden" onClick={redo}>Retry</button>
                    <span id="list"></span>
                </div>
            </div>
        </div>
    );
}

export default Home;