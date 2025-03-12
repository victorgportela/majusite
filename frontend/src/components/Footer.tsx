const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white py-4 border-t border-gray-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[13px] text-gray-500/90 font-light tracking-wider hover:text-gray-400/90 transition-colors duration-300">&copy; {new Date().getFullYear()} Maria Julia Portela. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
