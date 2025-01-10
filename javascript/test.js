const testType = sessionStorage.getItem('selectedTest') || 'Default Test';
document.title = `${testType} - Test`;
document.getElementById('test-title').textContent = `Welcome to the ${testType}`;