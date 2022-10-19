// pages/articles.js

import { useRouter } from 'next/router'

export default function Articles() {
    return (
        <div>
            <ul>
                <li>
                    Article 1
                    <ul>
                        <li>Name : Nike AIRMAX Lemonade</li>
                        <li>Size : 45</li>
                        <li>Color : green</li>
                        <li>Price : 225€</li>
                        <li>ID : 123456789</li>
                    </ul>
                </li>
                <li>
                    Article 2
                    <ul>
                        <li>Name : Nike AirForce 07</li>
                        <li>Size : 45</li>
                        <li>Color : white</li>
                        <li>Price : 100€</li>
                        <li>ID : 987654321</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}