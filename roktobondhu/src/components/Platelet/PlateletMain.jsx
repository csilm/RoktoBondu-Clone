import React from "react";
import "./PlateletMain.css";
const PlateletMain = () => {
  return (
    <div>
      <div className="plateletHeader container p-3 rounded-3">
        <div className="findDonar">
          <h1 className="Platelate-Header-Name">
            প্লাটিলেট - রক্তবন্ধু খুঁজুন ....
          </h1>
          <section>
            <form action="" method="post">
              <div className="form-group">
                <div className="select_grouph_area">
                  <select
                    name="blood_group"
                    className="form-control custom-select"
                    id="district"
                  >
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB+</option>
                  </select>
                </div>
                <div className="select_grouph_area">
                  <select
                    name="donate_zila"
                    class="form-control custom-select"
                    id="district"
                  >
                    <option value="ঢাকা">ঢাকা</option>
                    <option value="চট্টগ্রাম">চট্টগ্রাম</option>
                    <option value="সিলেট">সিলেট</option>
                    <option value="অন্যান্য">অন্যান্য</option>
                    <option value="পঞ্চগড়">পঞ্চগড়</option>
                    <option value="ঠাকুরগাঁও">ঠাকুরগাঁও</option>
                    <option value="দিনাজপুর ">দিনাজপুর </option>
                    <option value="রংপুর">রংপুর </option>
                    <option value="কুড়িগ্রাম">কুড়িগ্রাম</option>
                    <option value="লালমনিরহাট">লালমনিরহাট</option>
                    <option value="নীলফামারী">নীলফামারী </option>
                    <option value="গাইবান্ধা">গাইবান্ধা</option>
                    <option value="রাজশাহী">রাজশাহী </option>
                    <option value="যশোর">যশোর</option>
                    <option value="ময়মনসিংহ">ময়মনসিংহ</option>
                    <option value="কুমিল্লা">কুমিল্লা </option>
                    <option value="বরিশাল">বরিশাল</option>
                    <option value="ফরিদপুর">ফরিদপুর </option>
                    <option value="বগুড়া">বগুড়া </option>
                    <option value="পাবনা">পাবনা </option>
                    <option value="রাঙ্গামাটি">রাঙ্গামাটি </option>
                    <option value="কুষ্টিয়া">কুষ্টিয়া </option>
                    <option value="নোয়াখালী">নোয়াখালী </option>
                    <option value="খুলনা">খুলনা</option>
                    <option value="টাঙ্গাইল">টাঙ্গাইল </option>
                    <option value="ভোলা">ভোলা </option>
                    <option value="বান্দরবান">বান্দরবান </option>
                    <option value="চাঁদপুর">চাঁদপুর </option>
                    <option value="হবিগঞ্জ">হবিগঞ্জ </option>
                    <option value="লক্ষীপুর">লক্ষীপুর</option>
                    <option value="বরগুনা">বরগুনা </option>
                    <option value="ঝালকাঠি">ঝালকাঠি </option>
                    <option value="পিরোজপুর">পিরোজপুর </option>
                    <option value="পটুয়াখালী">পটুয়াখালী </option>
                    <option value="ঝিনাইদহ">ঝিনাইদহ</option>
                    <option value="নড়াইল">নড়াইল </option>
                    <option value="মাগুরা">মাগুরা </option>
                    <option value="সাতক্ষিরা">সাতক্ষিরা</option>
                    <option value="বাগেরহাট">বাগেরহাট </option>
                    <option value="চুয়াডাঙ্গা">চুয়াডাঙ্গা </option>
                    <option value="মেহেরপুর">মেহেরপুর </option>
                    <option value="সিরাজগঞ্জ">সিরাজগঞ্জ </option>
                    <option value="জয়পুরহাট">জয়পুরহাট </option>
                    <option value="নাটোর">নাটোর</option>
                    <option value="নওগাঁ">নওগাঁ </option>
                    <option value="চাঁপাইনবাবগঞ্জ">চাঁপাইনবাবগঞ্জ</option>
                    <option value="খাগড়াছড়ি">খাগড়াছড়ি </option>
                    <option value="ফেনী">ফেনী </option>
                    <option value="ব্রাহ্মণবাড়ীয়া">ব্রাহ্মণবাড়ীয়া </option>
                    <option value="সুনামগঞ্জ">সুনামগঞ্জ</option>
                    <option value="কক্সবাজার">কক্সবাজার </option>
                    <option value="মৌলভীবাজার">মৌলভীবাজার </option>
                    <option value="গোপালগঞ্জ">গোপালগঞ্জ </option>
                    <option value="শরীয়তপুর">শরীয়তপুর </option>
                    <option value="মাদারীপুর">মাদারীপুর </option>
                    <option value="রাজবাড়ী">রাজবাড়ী </option>
                    <option value="গাজীপুর">গাজীপুর </option>
                    <option value="কিশোরগঞ্জ">কিশোরগঞ্জ</option>
                    <option value="জামালপুর">জামালপুর </option>
                    <option value="শেরপুর">শেরপুর </option>
                    <option value="নেত্রকোনা">নেত্রকোনা</option>
                    <option value="মুন্সীগঞ্জ">মুন্সীগঞ্জ </option>
                    <option value="নরসিংদী">নরসিংদী </option>
                    <option value="নারায়ণগঞ্জ">নারায়ণগঞ্জ</option>
                    <option value="মানিকগঞ্জ">মানিকগঞ্জ </option>
                  </select>
                </div>
                <div class="form-group search_button">
                  <button type="submit" name="search_button" className="button">
                    খুঁজুন
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
        <div className="Registration text-center mt-5">
          <p>
            প্লাটিলেট ডোনার হতে চাইলে
            <a href="#platelet_form" class="btn btn-rounded btn-success ms-2">
              রেজিস্ট্রেশন করুন
            </a>
          </p>
          <p>পুরাতুন রক্তবন্ধু প্লাটিলেট দিতে চাইলে লগইন করে </p>
          <a href="/myaccount" class="btn  btn-rounded btn-danger ">
            প্রোফাইল আপডেট করুন
          </a>
        </div>
      </div>
      <div className="container w-75 bg-denger ektujeneninMain">
        <div class="topektujenenin">
          <h2>একটু জেনে নিন...</h2>
        </div>
        <p>
          যারা শুধু প্লাটিলেট/অণুচক্রিকা প্রদান করেন আমরা জানি ১৫ দিন পরপর
          প্লাটিলেট দেয়া যায়। কিন্তু আমাদের আবহাওয়া পরিবেশ ও খাদ্যাভ্যাস এবং
          জীবনাচরণের ভিত্তিতে মাসে ১ বার দেয়াই উত্তম। সে হিসেবে রক্তবন্ধুতে ৩০
          দিন পরপর প্লাটিলেট দিতে প্রস্তুত প্লাটিলেট দাতাদের লিস্টে দেখানো হবে।
          ৩০ দিনের কম হলে নাম কাটা অবস্থায় দেখা যাবে। তবে কারো শরীর স্বাস্থ্য
          ভালো হলে এবং খুব জরুরি রোগির ক্ষেত্রে ১৫-২০ দিন পরই চাইলে দিতে পারেন।
          <b> ঢাকা, কুমিল্লা, সিলেট ও চট্টগ্রাম</b> এর বাইরে যেহেতু এফেরেসিস এর
          মাধ্যমে শুধু প্লাটিলেট দেয়ার সুযোগ নেই তাই আপাতত এই চারটি জেলা যুক্ত
          করা হলো। আশেপাশের জেলার যারা এই চারটি লোকেশনে প্লাটিলেট দিতে পারবেন
          তারাও রেজিস্ট্রেশন করুন। প্রতিবার প্লাটিলেট দেয়ার পর লগইন করে তারিখ
          আপডেট করে দিবেন। অন্যকোন জেলায় এফেরেসিস মেশিনের মাধ্যমে শুধু
          প্লাটিলেট/অণুচক্রিকা নেয়ার ব্যবস্থা চালু হলে আমাদের জানাবেন, আমরা সেই
          জেলা যুক্ত করে দিবো।
          <br></br>
          <br></br>
          <b>প্লাটিলেট ডোনারের যোগ্যতাঃ</b>
          বয়স কমপক্ষে ১৮, ওজন ৬০ কেজি ও ভেইন বা রগ স্পষ্ট/ তুলনামূলক মোটা হতে
          হবে।
          <p>
            হিমোগ্লোবিন কমপক্ষে ১২.৫ ও প্লাটিলেট কাউন্ট ন্যূনতম ২,২০,০০০ (দুই
            লক্ষ বিশ হাজার) হতে হবে। যা হাসপাতালে চেক করে নেয়া হবে। বয়স কমপক্ষে
            ১৮, ওজন ৬০ কেজি ও ভেইন বা রগ স্পষ্ট/ তুলনামূলক মোটা হতে হবে।
          </p>
          <br></br>
        </p>
        <div class="buttons text-center bistarito-btn">
          <a href="#/" class="btn btn-danger">
            বিস্তারিত জানতে ক্লিক করুন
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlateletMain;
