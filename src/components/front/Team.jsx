export default function Team() {
  const teamMembers = [
    { name: 'Aditya Rao', role: 'Marketing & Growth Lead', img: 'team-member-1.png', color: 'primary' },
    { name: 'Aditya Rao', role: 'Marketing & Growth Lead', img: 'team-member-2.png', color: 'primary' },
    { name: 'Kavya Nair', role: 'Customer Success Manager', img: 'team-member-3.png', color: 'primary' },
    { name: 'Kavya Nair', role: 'Customer Success Manager', img: 'team-member-4.png', color: 'primary' },
  ]

  return (
    <section id="landingTeam" className="section-py landing-team">
      <div className="container">
        <div className="text-center mb-4">
          <span className="badge bg-label-primary">Our Great Team</span>
        </div>
        <h4 className="text-center mb-1">
          <span className="position-relative fw-extrabold z-1">
          Meet 
            <img
              src="/front-pages/images/front-pages/icons/section-title-icon.png"
              alt="laptop charging"
              className="section-title-img position-absolute object-fit-contain bottom-0 z-n1"
            />
          </span>
          {' '}Our Team
        </h4>
        <p className="text-center mb-md-11 pb-0 pb-xl-12">Experts building the future of real estate technology.</p>
        <div className="row gy-12 mt-2">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-3 col-sm-6">
              <div className="card mt-3 mt-lg-0 shadow-none">
                <div className={`bg-label-${member.color} border border-bottom-0 border-label-${member.color} position-relative team-image-box`}>
                  <img
                    src={`/front-pages/images/front-pages/landing-page/${member.img}`}
                    className="position-absolute card-img-position bottom-0 start-50"
                    alt="human image"
                  />
                </div>
                <div className={`card-body border border-top-0 border-label-${member.color} text-center`}>
                  <h5 className="card-title mb-0">{member.name}</h5>
                  <p className="text-body-secondary mb-0">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
