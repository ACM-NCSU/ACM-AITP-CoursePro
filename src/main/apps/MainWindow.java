/**
 * 
 */
package main.apps;

import java.awt.HeadlessException;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JTabbedPane;
import java.awt.BorderLayout;

/**
 * @author ACM-AITP
 *
 */
public class MainWindow extends JFrame {

	/**
	 * 
	 */
	private static final long serialVersionUID = -3325720678164178737L;
	private static final String MAIN_TITLE = "CoursePro";

	/**
	 * @throws HeadlessException
	 */
	public MainWindow() throws HeadlessException {
		super(MAIN_TITLE);
		this.setSize(750, 500);
		
		// Initialize the side bar - courses/tags tabs.
		JTabbedPane tabbedPane = new JTabbedPane(JTabbedPane.TOP);
		getContentPane().add(tabbedPane, BorderLayout.WEST);
		
		JPanel courseTab = new JPanel();
		tabbedPane.addTab("Courses", null, courseTab, null);
	}

}
