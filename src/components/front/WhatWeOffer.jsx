'use client'

import { useState } from 'react'

export default function WhatWeOffer() {
  const [activeTab, setActiveTab] = useState('Smart Property & Lead Management')

  const tabs = [
    'Smart Property & Lead Management',
    'Easy Visit Scheduling',
    'Seller Submission Portal',
    'Advisor Collaboration Network',
    'Voice Notes & Document Storage',
    'Analytics & Real-Time Alerts'
  ]

  const getTabContent = (tabName) => {
    switch (tabName) {
      case 'Smart Property & Lead Management':
        return {
          title: 'Smart Property & Lead Management',
          description: 'A centralized workspace to manage all properties, buyers, sellers, and their interactions with complete media and activity logs.',
          bullets: [
            'Manage property details, status, pricing, and descriptions',
            'Buyer & seller detail management',
            'Media uploads: images, videos, docs',
            'View complete buyer interaction history and property-wise activity timeline'
          ]
        }
      case 'Easy Visit Scheduling':
        return {
          title: 'Easy Visit Scheduling',
          description: 'Streamline your property visit scheduling process with an intuitive calendar system.',
          bullets: [
            'Schedule visits with buyers and sellers',
            'Calendar integration and reminders',
            'Visit status tracking',
            'Automated notifications and confirmations'
          ]
        }
      case 'Seller Submission Portal':
        return {
          title: 'Seller Submission Portal',
          description: 'Enable sellers to easily submit their property listings with all necessary details.',
          bullets: [
            'Easy property submission form',
            'Media upload capabilities',
            'Status tracking for submissions',
            'Automated review workflow'
          ]
        }
      case 'Advisor Collaboration Network':
        return {
          title: 'Advisor Collaboration Network',
          description: 'Connect and collaborate with advisors to expand your reach and grow your business.',
          bullets: [
            'Network with real estate advisors',
            'Share listings and opportunities',
            'Collaborative tools and messaging',
            'Commission tracking and management'
          ]
        }
      case 'Voice Notes & Document Storage':
        return {
          title: 'Voice Notes & Document Storage',
          description: 'Keep all your important notes and documents organized and easily accessible.',
          bullets: [
            'Record and store voice notes',
            'Secure document storage',
            'Quick search and retrieval',
            'Cloud-based backup and sync'
          ]
        }
      case 'Analytics & Real-Time Alerts':
        return {
          title: 'Analytics & Real-Time Alerts',
          description: 'Get actionable insights and stay informed with real-time alerts and comprehensive analytics.',
          bullets: [
            'Performance dashboards',
            'Real-time activity alerts',
            'Lead conversion tracking',
            'Customizable reports'
          ]
        }
      default:
        return null
    }
  }

  const content = getTabContent(activeTab)

  return (
    <section className="section-py what-we-offer">
      <div className="container">
        <h2 className="text-center mb-8 fw-extrabold">What we offer for Real Estate?</h2>

        <div className="offer-tabs mb-8">
          <div className="d-flex flex-wrap gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`offer-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  setActiveTab(tab)
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {content && (
          <div className="offer-content">
            <div className="row align-items-center g-15">
              <div className="col-lg-6 col-md-6 mb-4 mb-lg-0">
                <div className="qr-section">
                  <img
                    src="/front-pages/images/front-pages/home/dashboard-ui2.png"
                    alt={content.title}
                    className="img-fluid rounded"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="offer-details">
                  <h3 className="mb-4 fw-bold">{content.title}</h3>
                  <p className="mb-4 text-body">{content.description}</p>
                  <ul className="list-unstyled mb-4">
                    {content.bullets.map((bullet, index) => (
                      <li key={index} className="mb-2 d-flex align-items-start">
                        <span className="me-2 text-blue"><i className="icon-base ti tabler-circle me-1 icon-12px"></i></span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <a href="#" className="text-primary text-decoration-none fw-medium">
                    Read more →
                  </a> */}
                  <a href="#" class="btn btn-primary btn-lg waves-effect waves-light">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
