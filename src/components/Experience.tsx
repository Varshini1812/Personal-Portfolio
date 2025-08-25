
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar, CheckCircle } from "lucide-react";

export const Experience = () => {
 const experiences = [
  {
    title: "Associate Software Engineer",
    company: "Amazecodes Solutions",
    location: "Bangalore, India",
    period: "Jun 2024 - Present",
    current: true,
    achievements: [
    "Developed and maintained scalable RESTful APIs with Express.js, TypeScript, and Sequelize ORM using PostgreSQL and MongoDB.",
    "Implemented secure authentication with JWT-based role-based access control and robust middleware for validation and error handling.",
    "Automated backend tasks using node-cron and integrated secure file uploads with Amazon S3.",
    "Created detailed API documentation with Swagger, improving developer onboarding and maintainability.",
    "Integrated Amazon S3 using AWS SDK and multer-s3 for secure file uploads, ensuring compliance with IAM policies.",
    "Enhanced API reliability through robust input validation with Joi and comprehensive error handling middleware.",
    "Designed responsive, mobile-friendly UIs with Angular and optimized frontend-backend integration.",
    "Led an image processing project leveraging React.js and Python, utilizing OpenCV and Pillow for real-time image manipulation and analysis.",
    "Collaborated on scalable pipelines for image data handling and integrated visual recognition features for advanced functionality.",
    ],

  },
  {
    title: "Full Stack Web Developer Intern",
    company: "Amazecodes Solutions",
    location: "Bangalore, India",
    period: "Feb 2024 - May 2024",
    current: false,
    achievements: [
      "Completed hands-on training in modern web technologies including HTML, CSS, JavaScript, Angular, Node.js, and SQL.",
      "Implemented secure authentication and authorization mechanisms using JWT and OAuth.",
      "Collaborated on database management and performed CRUD operations with MongoDB and SQL.",
      "Gained experience in version control and team collaboration using GitLab.",
    ],
  },
];


  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="mb-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-gray-100 dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-4">
              Professional Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and key achievements
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative pl-16 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 w-5 h-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 animate-pulse"></div>
                
                <Card className="border-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 backdrop-blur-sm hover:scale-[1.02] transition-all duration-500">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
                          <Briefcase className="h-5 w-5 text-blue-600" />
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-3">
                          {exp.company}
                        </CardDescription>
                      </div>
                      {exp.current && (
                        <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 px-3 py-1 animate-pulse">
                          Current Position
                        </Badge>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-blue-500" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-blue-500" />
                        {exp.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-start gap-3 p-2 rounded-lg bg-white/50 dark:bg-gray-800/30 hover:bg-white/80 dark:hover:bg-gray-800/50 transition-all duration-300 transform hover:translate-x-1"
                          style={{ animationDelay: `${(index * 0.2) + (idx * 0.1)}s` }}
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
