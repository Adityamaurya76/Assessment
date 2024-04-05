import React from 'react'
import Navbar from '../navbar/Navbar';
import "./Home.css"

function Home() {
  return (
    <>
    <Navbar />
    <div className='parentdiv' style={{margin: "0px  auto"}}>
      <div className='left'>
      
        <div className='leftchild' id="left_child_left">
        <h2>FEATURED VOICES</h2>
          <div>
            <h4 className='h4'>Anatol Lieven</h4>
            <p>Ruddia Has Been Warninig the West About Ukraine for Decades</p>
          </div>
          <div>
            <h4 className='h4'>Ismat Ara</h4>
            <p>How It Feels to Be a Muslim Women solid by india's Right Wing</p>
          </div>
          <div>
            <h4 className='h4'>Robert J. Devis</h4>
            <p>Why ou Shouldn't Exercise yo Lose Weight</p>
          </div>
        </div>
        <div  className='leftchild rightchild' id="right_child_left">
        <h3></h3>
          <div>
            <h4 className='h4'>Yohanca Delgado</h4>
            <p>The Life-Changing Practice That Will Help You Feel More Gratitude</p>
          </div>
          <div>
            <h4 className='h4'>W. Kamau Bell</h4>
            <p>There's So Much More To Say about Bill Cosby</p>
          </div>
          <div>
            <h4 className='h4'>Christina Bu</h4>
            <p>What Norway Can Teach the World About Switching to Electric Vehicles</p>
          </div>
        </div>
      </div>
      <div className='right'>
      <div id="rightleftchild"  style={{margin: "5px  auto"}}>
        <h3 style={{textAlign: 'center'}}>LATEST STORIES</h3>
        <div class="rightleftchildchild">
          <h4>Amy Schneider's Jeopardy Streak Ends</h4>
          <span>JANUARY 26 22• 11:43 AM EST</span>
        </div>
        <div class="rightleftchildchild">
          <h4>'Writing With Fire' Shine a Light on All Women News Outlet</h4>
          <span>JANUARY 26 2022 •9:00 AM EST</span>
        </div>
        <div class="rightleftchildchild">
          <h4>Moderna Booster May Wane After 6 Monoths</h4>
          <p>JANUARY 26 2022 •5:51 PM EST</p>
        </div>
        <div class="rightleftchildchild">
          <h4>Pressure Mounts For Biden to Nominate a Black Women to the Supreme..</h4>
          <p>JANUARY 26 2022 • 3:51 PM EST </p>
        </div>
        <div class="rightleftchildchild">
          <h4>Why The James WEBB Space Telescope IS in Position- And Now WE Wait</h4>
          <p>JANUARY 26 2022 •3:46 PM EST</p>
        </div>
        <div class="rightleftchildchild">
          <h4>We Urgently need a New national COVID-19 Response Plan</h4>
          <p><strong>11 MIN READ</strong></p>
          <p>JANUARY 26 2022• 3:13 PM ESt</p>
        </div>

      </div>
      </div>
    </div>
    </>
  )
}

export default Home;