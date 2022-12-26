import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./ThalassemiaP.css"

const ThalassemiaP = () => {
    return (
        <div className='container'>
            <h2 className='text-center'>থ্যালাসেমিয়াঃ</h2>
            <div >
                <p>লক্ষ্য ও উদ্দেশ্যঃ থ্যালাসেমিয়া রোগিদের নির্দিষ্ট সময় অন্তর অন্তর রক্ত গ্রহণ করতে হয়। কারো প্রতিমাসে, অনেকের প্রায় দুই মাস তিন মাস পরপর রক্তের প্রয়োজন হয়। এতে তাদের সবসময়ই পরবর্তী রক্তদাতার খোঁজে দুশ্চিন্তাগ্রস্ত থাকতে হয়। আর্থিক ও মানষিক চাপ পরিবারের সদস্যদেরও অকৃত্রিম হাসি বিলীন করে দেয়। আমরা রক্তবন্ধুর মাধ্যমে তাদের তথ্যগুলো সংগ্রহ করতে চাই এবং প্রতিটি রোগিকে কিছু নির্দিষ্ট সংখ্যক আগ্রহী ব্লাড ডোনার দিয়ে যতোদূর সম্ভব চিন্তামুক্ত রাখার সামান্য উদ্যোগ গ্রহণ করেছি,<a style={{ textDecoration: 'none' }} className='text-primary' href="/thalasemiadetails">আরোও পড়ুন...</a></p>
            </div>
            <div className='form'>
                <form className='form-start'>
                    <div className='form-top'>
                        <h2>আপনার আশেপাশে থাকা কোন থ্যালাসেমিয়া রোগিকে রক্ত উপহার দিয়ে সহযোগিতা করতে চাইলে ফরম পূরণ করুন</h2>
                    </div>
                    <div className='form-two'>
                        <p>RoktoBondhu.com এ রক্তদাতা হিসাবে রেজিস্ট্রেশন করা আছে?</p>
                        <div className='checkButtons text-center'>
                            <a className='btn btn-success' id='btn-yes' href="/">
                                হ্যাঁ
                            </a>
                            <a className='btn btn-danger' id='btn-yes' href="/signup">
                                না
                            </a>

                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default ThalassemiaP;